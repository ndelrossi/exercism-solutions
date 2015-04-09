class Hamming
  def self.compute(strandA, strandB)
    strandA.chars.zip(strandB.chars).count { |pair| pair[0] != pair[1] && pair[1] != nil }
  end
end
