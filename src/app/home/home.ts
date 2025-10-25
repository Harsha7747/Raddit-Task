import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, QueryList, signal, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Cardserv } from '../cardservice/cardserv';
import { Test } from "../test/test";

@Component({
  selector: 'app-home',
  imports: [CommonModule, Test],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  expanded: number | null = null;

  @ViewChildren('textElement') textElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.textElements.forEach((el, i) => {
      const element = el.nativeElement;
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * 6; // 6 lines limit

      // Check if the content exceeds 6 lines
      if (element.scrollHeight > maxHeight) {
        this.data.update(dataarray=>{
          dataarray[i].showButton = true;
        })
        // this.data()[i].showButton = true;
      }
    });
  }

  toggle(index: number) {
    this.expanded = this.expanded=== index ? null : index;
  }

// expanded=false
// toggle(){
//   this.expanded=!this.expanded
// }
  router=inject(Router)

openLink(arg0: any) {
window.open(arg0,'_blank')
// console.log(arg0);
}

  posts: any[] = [];
  loading =signal(true) ;
data=signal<any>([]);
  constructor(private http: HttpClient,private carddserv:Cardserv) {}


  ngOnInit() {

// debugger
    // this.http.get('https://www.reddit.com/r/Angular2.json').subscribe({
    //   next: (res: any) => {
    //     alert('Data fetched successfully!');
    //     // const data = JSON.parse(res.contents);
    //     this.posts = res.data.children.map((p: any) => p.data);
    //     this.loading = false;
    //     this.data.set(this.posts);
    //     console.log('✅ Data fetched successfully:', this.data());
    //     this.data.set(this.posts);
    //     // console.log('✅ Data fetched successfully:',res);

    //   },
    //   error: (err) => {
    //     console.error('❌ Failed to fetch:', err);
    //     this.loading = false;

    //   }
    // });
      this.carddserv.getData().subscribe({
      next: (res: any) => {
        alert('Data fetched successfully!');
        // const data = JSON.parse(res.contents);
        // this.posts = res.data.children.map((p: any) => p.data);
        this.data.update(current =>
          [...current, ...res.data.children.map((p: any) => p.data)]
        );
        // this.data.set(this.posts);
        console.log('✅ Data fetched successfully:', this.data());
        this.loading.set(false);
        // this.data.set(this.posts);
      },
      error: (err) => {
        console.error('❌ Failed to fetch:', err);
        // this.loading.set(false) ;

      }
    });
  }
  clean(str:string):string{
const temp=str.replace(/&[@#A-Za-z0-9]+;/g, ' ').replace(/<[^>]*>/g, ' ') .replace(/\s+/g, ' ').trim();
return temp;
  }
 cleanHtmlText(encodedText: string): string {
    // Step 1: Decode HTML entities
    const textarea = document.createElement('textarea');
    textarea.innerHTML = encodedText;
    const decoded = textarea.value;
    // Step 2: Remove HTML tags
    // const plainText = decoded.replace(/<\/?[^>]+(>|$)/g, '').replace(/[!@#$%^&*..]/g, '');
    const plainText = decoded.replace(/<\/?[^>]+(>|$)/g, '').replace(/<[^>]*>/g, '') .replace(/`[^`]*`/g, '').replace(/\b\w+\$\b/g, '') .replace(/\b[A-Z][A-Za-z0-9]*\([^\)]...*\)/g, '') ;

    // Step 3: Clean extra spaces/newlines
    return plainText.replace(/\s+/g, ' ').trim();
  }
  formatLinks(text: string): string {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    // return text.replace(urlRegex, (url) => `<a href="${url}" target="_blank" style="color: blue; text-decoration: none !important;">${url}</a>`);
    return text.replace(urlRegex, (url) => `<a href="${url}" target="_blank" style="color: blue; text-decoration: none !important;">explore more</a>`);
  }
   getformattedText(encodedText:string): string {
    const cleaned = this.cleanHtmlText(encodedText);
    return this.formatLinks(cleaned.toLowerCase());
  }
}
