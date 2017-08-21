require 'test_helper'

class MessageTest < ActionMailer::TestCase
  test "contact_me" do
    mail = Message.contact_me
    assert_equal "Contact me", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
