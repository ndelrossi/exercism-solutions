class Hamming
  def self.compute(strandA, strandB)
    strandA.chars.slice(0...strandB.size).zip(strandB.chars).count { |pair| pair[0] != pair[1] }
  end
end
