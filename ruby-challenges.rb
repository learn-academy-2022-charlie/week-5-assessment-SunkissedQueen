# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
def singleL(array, letter)
  array.select {|value| value.include? letter}
end
p singleL(beverages_array,letter_o)
p singleL(beverages_array,letter_t)

# Output:["coffee", "soda water"]
# ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum_array array
  array.inject(:+)
  # [42, 7, 27].inject --> ((42+7)+27) --> 76
end
  p sum_array nums_array1

  # OR

def sum_array array
  array.sum
  # adds the numbers in the array --> 100
end
  p sum_array nums_array2

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike 
  # allow the attributes to be accesssed
attr_accessor :model, :wheels, :current_speed
  # initialize default key:values
  def initialize model_param
      @model = model_param
      @wheels= 2
      @current_speed = 0
  end
  # allow each value to be shown
  def bike_info
      # string interpolate to display each value
      "The #{@model} bike with #{@wheels} wheels, current speed of #{@current_speed} mph."
  end
  # make a method that increases speed. takes in a number 
  def pedal_faster(integer) 
      # conditional to check if the result will be above 0
      if @current_speed + integer > 0
          # if it is, add that number to the current speed
      @current_speed = @current_speed + integer
      # string interpolate the current speed
      p "Speeding up to #{@current_speed} mph."
      else
          # if that number is 0 or lower, current speed becomes 0
          @current_speed = 0
          p "Stopping."
      end
  end
  # make a method that decreases speed, takes in a number
  def brake(integer)
      # conditional to check if the speed will be above 0
      if @current_speed - integer > 0
          # if it is then subtract the given number from current speed
          @current_speed = @current_speed - integer 
          # string interpolate the current speed
          p "Slowing down to #{@current_speed} mph."
      else
          # if the current speed would be 0 or less, make it 0
          @current_speed = 0
          p "Stopping."
      end
  end
end

trek_bike = Bike.new('Trek')
p trek_bike.bike_info

trek_bike.pedal_faster(10)
#output-> "Speeding up to 10 mph."
# Expected output example: my_bike.pedal_faster(10) => 10
trek_bike.pedal_faster(18)
#output-> "Speeding up to 28 mph."
# Expected output example: my_bike.pedal_faster(18) => 28
trek_bike.brake(5)
#output-> "Slowing down to 23 mph."
# Expected output example: my_bike.brake(5) => 23
trek_bike.brake(25)
#output-> "Stopping."
# Expected output example: my_bike.brake(25) => 0
p trek_bike.bike_info
#output-> "The Trek bike with 2 wheels, current speed of 0 mph."
