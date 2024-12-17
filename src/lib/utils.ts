import prisma from "@/lib/prisma"

export async function loginHandler(userPassword: string) {
  const data = await prisma.password.findFirst({
    select:{
      password: true,
    }
  })

  const password = data?.password;

  if(!password){
    await prisma.password.create({
      data: {
        password: userPassword
      }
    })
    return true;
  }
 
  return userPassword === password;
}

export async function setPosition(position: boolean) {
  await prisma.position.upsert({
    where: {
      id: 1
    },
    create: {
      isHere: position
    },
    update: {
      isHere: position
    }
  })
}

export async function getPosition() {
  const data = await prisma.position.findFirst({
    select:{
      isHere: true,
    }
  })

  return data?.isHere;
}