<?php

function squareOfSums($input)
{
    return pow(array_sum(range(1, $input)), 2);
}

function sumOfSquares($input)
{
    return array_reduce(range(1, $input), function($acc, $item) {
        return $acc + pow($item, 2);
    }, 0);
}

function difference($input)
{
    return squareOfSums($input) - sumOfSquares($input);
}

