<?php

function toRna($dna_strand) {
    $conversion = array(
        'G' => 'C',
        'C' => 'G',
        'T' => 'A',
        'A' => 'U',
    );

    $rna_strand = '';
    for ($i = 0; $i < strlen($dna_strand); $i++)
    {
        $rna_strand .= $conversion[$dna_strand[$i]];
    }

    return $rna_strand;
}
