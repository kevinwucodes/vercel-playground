module.exports = (req, res) => {
  res.json({
    body: 'hello there from 20210602',
    // query: req.query,
    // cookies: req.cookies,
  })

  // res.json({
  //   body: req.body,
  //   query: req.query,
  //   cookies: req.cookies,
  // })
}
