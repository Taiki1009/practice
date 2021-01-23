class Output
  def messages
    @messages ||= []
  end

  def puts(message)
    messages << message
  end

  def output
    @output ||= Output.new
  end
end


Given /^I am not yet playing$/ do
end

When /^I start a new game$/ do
  game = Codebreaker::Game.new(output)
  game.start
end

Then /^ Ishould see "([^"]*)"$/ do |message|
  expect(output.messages).to include(message)
end