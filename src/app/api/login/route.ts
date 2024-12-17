import { NextResponse } from "next/server"

export const POST = async (request: Promise<Request>) => {
  const req = await request;
  let jsonBody;

  try {
    jsonBody =  await req.json()
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "JSON syntax error"
    }, {
        status:  400
    })
  }

  const password = "true" //todo fetch

  if(jsonBody.password === password) {
    return NextResponse.json({
      success: true
    })
  } else {
    return NextResponse.json({
      success: false,
      message: "Incorrect password"
    })
  }

}