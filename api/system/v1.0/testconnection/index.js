module.exports = (req, res) => {
  console.log('inside test connection')
  res.json({
    'Test-Connection': 'successful',
  })
}
