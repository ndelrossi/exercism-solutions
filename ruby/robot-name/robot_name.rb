class Robot
  attr_reader :name
  @@all_names = []

  def initialize
    reset
  end

  def reset
    newName = create_name

    if (@@all_names.include? newName)
      reset
      return
    end

    @@all_names.map! { |n| n == @name ? newName : n }
    @name = newName
  end

  private

  def create_name
    (('A'..'Z').to_a.sample(2) + (0..9).to_a.sample(3)).join
  end
end
