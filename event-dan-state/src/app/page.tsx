"use client"
import { Tombol_1, Tombol_2, Tombol_3 } from "@/components/button";
import Gallery from "@/components/gallery";
import { Form, Form2 } from "@/components/form"
import Image from "next/image";
import Acccordion from "@/components/accordion";

export default function Home() {
  return (
    <main className="">
      <div>
          <h1>ppppp</h1>
            <Tombol_1/>
            <hr></hr>
            <Tombol_2 isiPesan="ini pesanku" namaTombol="pesan"/>
        </div>
        <br></br>
        <div>
            <Tombol_3 isiPesan="Child Element : Tombol-1" namaTombol="Tombol-1"/>
            <Tombol_3 isiPesan="Child Element : Tombol-2" namaTombol="Tombol-2"/>
        </div>
        <Gallery/>
        <br></br>
        <Form/>
        <br></br>
        <Form2/>
        <br></br>
        <Acccordion/>
    </main>
  );
}
