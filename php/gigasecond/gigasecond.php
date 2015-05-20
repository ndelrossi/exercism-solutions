<?php

function from($date) {
    $gigasecond = pow(10, 9);
    $date->add(new DateInterval('PT'.$gigasecond.'S'));
    return $date;
}
