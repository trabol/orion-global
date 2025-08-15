import { Iauthor } from "../../authors/interface/authos.interface"

export interface IBook {
  id: string
  title: string
  chapters: number
  pages: number
  authors: Iauthor[]
}

export interface IBookAVG {
  id: string
  title: string
  chapters: number
  pages: number
  avg: number
}
