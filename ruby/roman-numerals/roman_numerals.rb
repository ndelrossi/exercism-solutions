class Integer

  VALUE_TO_ROMAN = {
    1000 => 'M',
    900  => 'CM',
    500  => 'D',
    400  => 'CD',
    100  => 'C',
    90   => 'XC',
    50   => 'L',
    40   => 'XL',
    10   => 'X',
    9    => 'IX',
    5    => 'V',
    4    => 'IV',
    1    => 'I'
  }

  def to_roman
    def convert(result, nums, value)
      nums.length == 0 ? result : convert(result + VALUE_TO_ROMAN[nums[0]] * (value / nums[0]), nums.slice(1..-1), value % nums[0])
    end
    convert('', VALUE_TO_ROMAN.keys, self)
  end
end
