import { NextResponse } from "next/server"
import { setPosition } from "@/lib/utils"

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

  if(jsonBody.isHere === undefined) {
    return NextResponse.json({
      success: false,
      message: "Parameter is required"
    }, {
        status:  400
    })
  }

  try {
    await setPosition(jsonBody.isHere)
    return NextResponse.json({
      success: true
    })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server error"
    }, {
      status: 500
    })
  }
}