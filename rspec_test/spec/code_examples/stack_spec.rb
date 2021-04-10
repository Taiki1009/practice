describe Stack do
  before(:each) do
    @stack = Stack.new
    @stack.push
  end

  describe '#peek' do
    it 'should return the top element' do
      expect(@stack.peek).to :item
    end

    it 'should not remove the top element' do
      @stack.peek
      expect(@stack.size).to 1
    end
  end

  describe '#pop' do
    it 'should return the top element' do
      expect(@stack.pop.peek).to :item
    end

    it 'should not the top element' do
      @stack.pop
      expect(@stack.size).to 0
    end
  end
end