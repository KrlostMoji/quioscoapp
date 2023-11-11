import { PrismaClient } from "@prisma/client";

export default async function handler(req, res){
  
  const prisma = new PrismaClient()
  


  //Agregar nuevas órdenes
  if(req.method === 'POST'){
    const orden = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        total: req.body.total,
        pedido: req.body.pedido,
        fecha: req.body.fecha
      }
    })
    res.status(200).json(orden)
  } else if (req.method === 'GET'){
      //Consultar las ordenes que no han sido despachadas
      const ordenesPendientes = await prisma.orden.findMany({
        where: {
          estado: false
        }
      })
      res.status(200).json(ordenesPendientes)
  }
  
}