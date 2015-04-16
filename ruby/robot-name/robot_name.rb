class Robot
  attr_reader :name
  @@all_names = []

  def initialize
    reset
  end

  def reset
    newName = create_name

    reset if (@@all_names.include? newName)

    @@all_names.delete(@name)
    @@all_names << newName

    @name = newName
  end

  private

  def create_name
    letters = ('A'..'Z').to_a
    numbers = (0..9).to_a

    random_char(letters, 2) + random_char(numbers, 3)
  end

  def random_char(charSet, quantity)
    charSet[rand(charSet.length)].to_s * quantity
  end
end
