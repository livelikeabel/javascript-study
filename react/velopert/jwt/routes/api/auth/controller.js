const jwt = require('jsonwebtoken')
const User = require('../../../models/user')

/*
    POST /api/auth/register
    {
        username,
        password
    }
*/
exports.register = (req, res) => {
  const { username, password } = req.body
  let newUser = null

  //create a new user if does not exist
  const create = user => {
    if (user) {
      throw new Error('username exists')
    } else {
      return User.create(username, password)
    }
  }

  // count the number of the user
  const count = user => {
    newUser = user
    return User.count({}).exec()
  }

  // assign admin if count is 1
  const assign = count => {
    if (count === 1) {
      return newUser.assignAdmin()
    } else {
      // if not, return a promise that returns false
      return Promise.resolve(false)
    }
  }

  // respond to the client
  const respond = isAdmin => {
    res.json({
      message: 'registered successfully',
      admin: isAdmin ? true : false
    })
  }

  // run when there is an error (username exists)
  const onError = error => {
    res.status(409).json({
      message: error.message
    })
  }

  //check username duplication
  User.findOneByUsername(username)
    .then(create)
    .then(count)
    .then(assign)
    .then(respond)
    .catch(onError)
}

/*
    POST /api/auth/login
    {
        username,
        password
    }
*/

exports.login = (req, res) => {
  const { username, password } = req.body
  const secret = req.app.get('jwt-secret')

  // check the user info & generate the jwt
  const check = user => {
    if (!user) {
      // user does not exist
      throw new Error('login failed')
    } else {
      // user exists, check the password
      if (user.verify(password)) {
        // create a promise that generates jwt asynchronously
        const p = new Promise((resolve, reject) => {
          jwt.sign(
            {
              _id: user._id,
              username: user.username,
              admin: user.admin
            },
            secret,
            {
              expiresIn: '7d',
              issuer: 'abel.com',
              subject: 'userInfo'
            }, (err, token) => {
                if (err) reject(err)
                resolve(token)
            })
        })
          return p
      } else {
          throw new Error('login faild')
      }
    }
  }

  // respond the token
  const respond = (token) => {
    res.json({
      message: 'logged in successfully',
      token
    })
  }

  // error occured
  const onError = (error) => {
    res.status(403).json({
        message: error.message
    })
  }

  // find the user
  User.findOneByUsername(username)
  .then(check)
  .then(respond)
  .catch(onError)
}

/*

사용법: jwt.sign(payload, secret, options, [callback])

만약에 callback 이 전달되면 비동기적으로 작동하며, 콜백함수의 파라미터는 (err, token) 입니다. 전달되지 않을시엔 동기적으로 작동하며, JWT 를 문자열 형태로 리턴합니다.

payload 는  객체, buffer, 혹은 문자열형태로 전달 될 수있습니다.

secret 은 서명을 만들 때 사용되는 알고리즘에서 사용되는 문자열 혹은 buffer 형태의 값 입니다.

options:

algorithm: 기본값은 HS256 으로 지정됩니다.
expiresIn: JWT 의 등록된 클레임중 exp 값을 x 초후 혹은 rauchg/ms 형태의 기간 후로 설정합니다.
(예제: (60, “2 days”, “10h”, “7d”)
notbefore: JWT 의 등록된 클레임중 nbf 값을 x 초후 혹은 rauchg/ms 형태의 기간 후로 설정합니다.
(예제: (60, “2 days”, “10h”, “7d”)
audience
issuer
jwtid
subject
noTimestamp
header

*/

/*
    GET /api/auth/check
*/

exports.check = (req, res) => {
  res.json({
    success: true,
    info: req.decoded
  })
}