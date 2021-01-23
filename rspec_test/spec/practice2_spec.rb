RSpec.describe 'matchers' do
    it 'a' do
        expect(1 + 2).to eq 3
    end
    it 'b' do
        expect(1 + 2).to be >= 3
    end
    it 'c' do
        expect([]).to be_empty
    end
    it 'd' do
        # user = User.new(name: 'Tom', email: 'tom@example.com')
        # expect(user).to be_valid # user.valid? が true になればパスする
    end
end