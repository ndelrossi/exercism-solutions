class Complement

  @@dna_to_rna = { 'C' => 'G',
                   'G' => 'C',
                   'T' => 'A',
                   'A' => 'U' }

  def self.of_dna(dna)
    dna.chars.map do |nucleotide|
      raise ArgumentError unless @@dna_to_rna.keys.include? nucleotide
      @@dna_to_rna[nucleotide]
    end.join('')
  end

  def self.of_rna(rna)
    rna_to_dna = @@dna_to_rna.invert
    rna.chars.map do |nucleotide|
      raise ArgumentError unless rna_to_dna.keys.include? nucleotide
      rna_to_dna[nucleotide]
    end.join('')
  end
end
