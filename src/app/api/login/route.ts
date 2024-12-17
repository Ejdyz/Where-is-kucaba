import { NextResponse } from "next/server"
import { loginHandler } from "@/lib/utils"

export const POST = async (request: Request) => {
  const req = await request;
  let jsonBody;

  try {
    jsonBody =  await req.json()
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      success: false,
      message: "JSON syntax error"
    }, {
        status:  400
    })
  }

  if(!jsonBody.password) {
    return NextResponse.json({
      success: false,
      message: "Password is required"
    }, {
        status:  400
    })
  }


  if(await loginHandler(jsonBody.password)) {
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