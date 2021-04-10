require 'spec_helper'

module Codebreaker
  RSpec.describe Game do
    # モック・テストダブルの作成
    let(:output)  { double('output').as_null_object }
    let(:game) { Game.new(output) }
    
    describe "#start" do
      it "sends a welcome message" do
        expect(output).to receive(:puts).with('Welcome to Codebreaker')
        game.start('1234')
      end

      it "prompts for the first guess" do
        expect(output).to receive(:puts).with('Enter guess:')
        game.start('1234')
      end
    end

    describe "#guess" do
      context "with no match" do
        # it "send a mark with ''" do
        #   # 正解のcodeを覚えさせる
        #   game.start('1234')
        #   # 正解のmarkを覚えさせる
        #   expect(output).to receive(:puts).with('')
        #   # 予想のguessを判定させてmarkと一致するかテスト
        #   game.guess('5555')
        # end
      end

      context "with 1 number match" do
        it "sends a mark with '-'" do
          game.start('1234')
          expect(output).to receive(:puts).with('-')
          game.guess('2555')
        end
      end
    end
  end
end