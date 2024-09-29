<?php
/*
 *    Modular zarqa tables. Learn to leyn, note by note, using interactive zarqa tables
 *    Copyright (C) 2011 Benjamin Levine
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
	$handle = $_GET['zarqa'];

	//Error handling where file doesn't exist
	if(!file_exists($handle)) { die('Could not find Zarqa table'); }
	else {
		
		$line = 0;
		$taam = 0;
		$i = 0;
        $comment = FALSE;
		
		if(($file = fopen($handle, "r")) !== FALSE) {
			while (($data = fgetcsv($file, 50, ",")) !== FALSE) {
                //Skip comments
                if(trim($data[0]) == '*/') {
                    $comment = FALSE;
                    continue;
                }            
                if(trim($data[0]) == '/*' || $comment == TRUE) {
                    $comment = TRUE;
                    continue;
                }
				//First 4 lines are important data for configuring the webpage
				if($i < 4) { 
					//Give variables names. Named image_width, image_height, line_height, rollover_distance
					${$data[0]} = $data[1];
					$i++;
				}
				//Fourth line is just a break from config data to taamim
				elseif($i == 4) { 
					//Get $i past 4 so will go to 'else' condition
					$i++;
					//Also necessary to set some initial conditions. Used later for joining lines together
					$join_line[$line] = 1;
				}
				else {
					//Work out where blank lines are (for formatting) and increment to next line
					if($data[0] == null) {	$line++; $taam = 0; $join_line[$line] = 1; }
					//Add in a break line clause, useful for the trop of esther where it is broken into parts
					elseif($data[0] == 'break_line') { $output[$line][0] = 0; $join_line[$line] = 1; }
					//Allows lines to be joined together as one taam. Useful in trop of esther
					elseif($data[0] == 'join_line') { $join_line[$line]++; }
					else {
						$output[$line][$taam++] = $data;
					}
				}
			}
			fclose($file);
		}
	}
?>
<html>
	<head>
		<link rel="stylesheet" href="style.css" type="text/css" />
		<script type="text/javascript" src="mobile_detect.js"></script> 
		<script type="text/javascript" src="scripts.js"></script>
		
		<style>
			ul#taamim {
				background: url(images/<?= $handle ?>.png) no-repeat 0 0;
				width: <?= $image_width ?>px;
				height: <?= $image_height ?>px;
			}

			ul#taamim li a:hover {
				background: url(images/<?= $handle ?>.png) no-repeat 0 0;
			}
			<?php			
				$line_number = 0;
				$top = 0;
				foreach($output as $line) {
					$rollover = $rollover_distance + $top;
					$prev_width = $image_width;
					foreach($line as $taam) {
						//Doesn't output the break line clause as 0						
						if($taam) {
							$width = $prev_width - $taam[1];
							$prev_width = $taam[1]; ?>
				
			#<?= $taam[0] ?> {
				width: <?= $width ?>px;
				height: <?= $line_height*$join_line[$line_number] ?>px;
				top: <?= $top ?>px;
				left: <?= $taam[1] ?>px;
			}
 
			ul#taamim li#<?= $taam[0] ?> a:hover {
				background-position: -<?= $taam[1] ?>px -<?= $rollover ?>px;
			}<?php	} }
				//Calculate $top based on previous value added to line_height and a scale factor
				$top += $line_height*$join_line[$line_number];
				$line_number++;
				} ?>

		</style>
	</head>
	<body>
		<ul id="taamim">	
<?php
	foreach($output as $line) {
		foreach($line as $taam) {
			//Doesn't output the break line clause as 0		
			if($taam) {
				echo "			<li id=\"" . $taam[0] . "\"><a href=\"javascript:play('" . $handle . "','" . $taam[0] . "');\">" . ucfirst($taam[0]) . "</a></li>\n";	
			}
		}
	}
?>
		</ul>
<?php	//Backup object. If HTML5 fails then can rely on just embedding sound into webpage. Works on IE6. ?>
		<div id="object" style="display:none;">&nbsp;</div>
	</body>
</html>
