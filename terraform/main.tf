resource "aws_dynamodb_table" "rsvp_table" {

  name         = "Wedding-rsvp-tf"
  billing_mode = "PAY_PER_REQUEST"

  hash_key = "guestId"

  attribute {
    name = "guestId"
    type = "S"
  }
}
