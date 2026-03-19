"use client"
import Image from "next/image"
import * as React from "react"
import { Search, Instagram, ArrowRight } from "lucide-react"

const categories = ["All", "Skincare", "Hair", "Treatments", "Anti-Aging"]

type Blog = {
  id: number;
  category: string;
  title: string;
  desc: string;
  image: string;
  date:string;
}

const posts: Blog[] = [
  {
    id: 1,
    category: "Hair",
    title: "Signs of Damaged Hair",
    desc: "Learn how to identify the early signs of hair damage and what you can do to restore its health.",
    image: "/images/hair.png", // Replace with your assets
    date:"12 Dec 2024",
  },
  {
    id: 2,
    category: "Anti-Aging",
    title: "Microneedling for Hair Growth",
    desc: "Discover the science behind microneedling and how it stimulates hair follicles for better density.",
    image: "/images/image copy.png",
    date:"",
  },
  {
    id: 3,
    category: "Skincare",
    title: "Signs of Damaged skin",
    desc: "Learn how to identify the early signs of hair damage and what you can do to restore its health.",
    image: "/images/skin.png", // Replace with your assets
    date:"",
  },
  {
    id: 4,
    category: "Anti-Aging",
    title: "Microneedling for Hair Growth",
    desc: "Discover the science behind microneedling and how it stimulates hair follicles for better density.",
    image: "/images/sub2.png",
    date:"",
  },
  {
    id: 5,
    category: "Hair",
    title: "Signs of Damaged Hair",
    desc: "Learn how to identify the early signs of hair damage and what you can do to restore its health.",
    image: "/images/sub1.png", // Replace with your assets
    date:"",
  },
  {
    id: 6,
    category: "Anti-Aging",
    title: "Skin problems",
    desc: "Discover the science behind microneedling and how it stimulates hair follicles for better density.",
    image: "/images/image.png",
    date:"",
  },
  // Add more posts as needed
]



export default function BlogPage() {
  const [search,setSearch] = React.useState("")
  const [activeCategory,setActiveCategory] = React.useState("All");
  const filteredPosts = posts.filter((post) => {
    const matchTitle = post.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || post.category === activeCategory;
    return matchTitle && matchCategory;
  })
  const latestPost=filteredPosts[0]
  const otherPosts=filteredPosts.slice(1)
  
  const filteredPostsByCategory = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category === activeCategory);
  return (
    <main className="min-h-screen bg-[#F1F8F6] text-[#1D423E]">
      {/* HERO SECTION */}
      <section className="relative px-10! mx-auto h-[450px] flex items-center justify-center overflow-hidden bg-[#F1F8F6]">
          <Image
            src="/images/blog-image.png" 
            alt="Dermatology treatment" 
            height={500}
            width={800}
            className="absolute right-29 top-0 [mask-image:linear-gradient(to_left,black_70%,transparent)]"
          />
        <div className="container mx-auto px-6! lg:px-20! relative z-10">
          <div className="max-w-xl">
            <h4 className="uppercase tracking-widest font-(family-name:--font-viga) text-[16px] font-semibold mb-4">Blogs & Articles</h4>
            <h1 className="text-[30px]  lg:text-[38px] font-(family-name:--font-viga) leading-tight mb-4! mt-4!">
              Expert Dermatologist Tips for Healthy Hair
              <br/>
              and skin
            </h1>
            <p className="text-lg opacity-80! mb-8! font-(family-name:--font-subhead) font-medium">
              Discover the latest hair care tips, treatments, and insights from our dermatology specialists.
            </p>
            <div className="flex gap-6!">
              <button className="bg-[#25544C] text-white px-8! font-(family-name:--font-heading) font-semibold py-3! rounded-md hover:bg-[#1a3d37] transition cursor-pointer">
                Read Featured Article
              </button>
              <button className="flex items-center gap-2! border-2 border-[#25544C] font-(family-name:--font-heading) font-bold px-8! py-3! rounded-md hover:bg-[#25544C]/5 cursor-pointer transition">
                <Instagram size={20} /> Follow Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <div className="flex flex-col">
      <div className="container mx-auto px-6! lg:px-20! mt-8! relative z-20!">
        <div className="bg-[#dce0ea] backdrop-blur-md p-4! rounded-xl shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4!">
          <div className="flex gap-2!">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6! cursor-pointer py-2! rounded-full text-[15px] font-(family-name:--font-poppins) font-medium transition ${
                  category === activeCategory ? "bg-[#25544C] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3! top-1/2 -translate-y-1/2 text-[#25544C]" size={20} />
            <input 
              type="text" 
              placeholder="Search blog articles..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10! pr-4! py-2! font-(family-name:--font-poppins) font-medium bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#25544C]/20 outline-none text-sm"
            />
          </div>
        </div>
      </div>

     <section className="container mx-auto px-6! lg:px-20 py-16!">

  {latestPost && (
  <div className="group max-w-[500px] bg-white border-b-gray-500 rounded-3xl overflow-hidden 
  border border-[#E8F0ED] shadow-sm hover:shadow-xl transition-all duration-500 mb-14!">

    <div className="relative overflow-hidden">
      <Image
        src={latestPost.image}
        alt={latestPost.title}
        width={500}
        height={320}
        className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700"
      />

      <span className="absolute top-4 left-4 bg-[#25544C] font-(family-name:--font-poppins) text-white text-xs px-3! py-1! 
      rounded-full font-semibold tracking-wide">
        Latest
      </span>
    </div>

    <div className="p-6!">

      <span className="text-[17px] font-bold font-(family-name:--font-subhead) text-[#C5A67C] uppercase tracking-widest">
        {latestPost.category}
      </span>

      <h3 className="text-[30px] mt-2! mb-3! font-bold text-[#25544C] leading-snug font-(family-name:--font-heading)">
        {latestPost.title}
      </h3>

      <p className="text-[#4B6B66] font-(family-name:--font-subhead) font-medium text-[18px] leading-relaxed mb-6!">
        {latestPost.desc}
      </p>

      <div className="flex items-center justify-between border-t border-[#EEF3F2] ">

        <span className="text-sm font-(family-name:--font-poppins) text-gray-400">
          {latestPost.date}
        </span>

        <button className="flex items-center gap-2 text-[#25544C] font-(family-name:--font-poppins) font-semibold
         transition-all duration-300">
          Read More
          <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" size={18} />
        </button>

      </div>
    </div>

  </div>
)}

  {/* Other Posts Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8!">
    
    {otherPosts.map((post, index) => (
      <div
        key={index}
        className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-[#FFFFFF]"
      >

        <div className="h-48 overflow-hidden">
          <Image
            src={post.image}
            className="w-full h-full object-cover group-hover:scale-105 transition-all"
            alt={post.title}
            width={500}
            height={500}
          />
        </div>

        <div className="p-6!">
          <span className="text-xs font-(family-name:--font-subhead) font-bold text-[#C5A67C] uppercase tracking-widest">
            {post.category}
          </span>

          <h4 className="text-xl font-bold font-(family-name:--font-heading) mt-2! mb-3!">
            {post.title}
          </h4>

          <p className="text-gray-600 font-(family-name:--font-subhead) font-medium text-[15px] leading-relaxed mb-6!">
            {post.desc}
          </p>

          <button className="text-sm font-semibold flex items-center gap-1 cursor-pointer font-(family-name:--font-poppins)">
            Read More <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" size={14} />
          </button>
        </div>

      </div>
    ))}

  </div>

</section>
      </div>
    </main>
  )
}