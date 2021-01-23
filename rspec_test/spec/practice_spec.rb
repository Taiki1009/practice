# RSpec.describe '四則演算' do
#   # it do ~ end は、exampleという単位。1example - 1testが理想
#   describe '足し算' do
#     it '1 + 1 は 2 になること' do
#       expect(1 + 1).to eq 2
#     end
#   end
#   describe '引き算' do
#     it '10 - 1 は 9 になること' do
#       expect(10 - 1).to eq 9
#     end
#   end
# end


class User
  def initialize(name:, age:)
    @name = name
    @age = age
  end
  def greet
    if @age <= 12
      "ぼくは#{@name}だよ。"
    else
      "僕は#{@name}です。"
    end
  end
end

RSpec.describe User do
  describe '#greet' do
    let(:user) { User.new(name: 'たろう', age: age) }
    subject { user.greet }

    context '12歳以下の場合' do
      let(:age) { 12 }
      it { is_expected.to eq 'ぼくはたろうだよ。' }
    end
    context '13歳以上の場合' do
      let(:age) { 13 }
      it { is_expected.to eq '僕はたろうです。' }
    end
  end
end