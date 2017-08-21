require 'test_helper'

class MessageTest < ActiveSupport::TestCase

  # previous test omitted

  test 'should be valid when all attributes are set' do
    attrs = { 
      name: 'linto',
      email: 'linto@shopknekt.com',
      body: 'kthnxbai'
    }

    msg = Message.new attrs
    assert msg.valid?, 'should be valid'
  end
end
