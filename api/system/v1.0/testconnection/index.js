module.exports = (req, res) => {
  // console.log('***** req.baseUrl *****')
  // console.log(req.baseUrl)

  // console.log('***** req.body *****')
  // console.log(req.body)

  // console.log('***** req.hostname *****')
  // console.log(req.hostname)

  // console.log('***** req.ip *****')
  // console.log(req.ip)

  // console.log('***** req.method *****')
  // console.log(req.method)

  // console.log('***** req.params *****')
  // console.log(req.params)

  // console.log('***** req.path *****')
  // console.log(req.path)

  // console.log('***** req.protocol *****')
  // console.log(req.protocol)

  // console.log('***** req.query *****')
  // console.log(req.query)

  // console.log('***** req.protocol *****')
  // console.log(req.protocol)

  // console.log('***** req.route *****')
  // console.log(req.route)

  res.json({
    body: 'a test connection',
    // query: req.query,
    // cookies: req.cookies,
  })

  // res.json({
  //   body: req.body,
  //   query: req.query,
  //   cookies: req.cookies,
  // })
}
