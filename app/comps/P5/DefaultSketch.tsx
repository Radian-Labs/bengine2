// @ts-nocheck

"use client"
import { useState, useRef, useEffect } from "react"
import InitP5 from "../../lib/InitP5.js"
import { sketch } from "./sketch.ts"

export default function DefaultSketch() {

  let mp5: any = null
  let parentRef = useRef()

  const [ isMounted, setIsMounted ] = useState( false )

  useEffect(() => { if( !isMounted ) setIsMounted( true ) }, [])

  useEffect(() => { 
    if ( !isMounted ) return
    if ( !mp5 ) mp5 = InitP5( sketch, parentRef )
    else return mp5.remove()
  }, [ isMounted, sketch ])


  return (
    <div>
      <div ref={ parentRef } id="canvasParent" className="h-[450px] w-full md:w-4/6 lg:w-2/3 m-auto"  />
    </div>
  )
}