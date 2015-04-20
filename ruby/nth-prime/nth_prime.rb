class Prime
  def nth(num, index = 2)
    raise ArgumentError if num < 1
    while num > 0 do
      if isPrime?(index)
        return index if num == 1
        num -= 1
      end
      index += 1
    end
  end

  private

  def isPrime?(num)
    (2..Math.sqrt(num)).each do |i|
      return false if num % i == 0
    end
    true
  end
end
