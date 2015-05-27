<?php

function raindrops($number) {
    $resultHash = array(
        3 => "Pling",
        5 => "Plang",
        7 => "Plong",
    );

    $result = '';
    forEach ($resultHash as $key => $value) {
        if ($number % $key == 0) {
            $result .= $value;
        }
    }

    return $result != null ? $result : (string)$number;
}
