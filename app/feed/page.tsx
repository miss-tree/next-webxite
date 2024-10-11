"use client"
import Link from "next/link"
// import Image from "next/image";
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
	return (
		<div>
			<div className='p-4 md:w-1/3'>
				<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
        <Link href="/photos/55">
					<img
						className='lg:h-48 md:h-36 w-full object-cover object-center'
						src='https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/blog.jpg?alt=media&token=271cb624-94d4-468d-a14d-455377ba75c2'
						alt='blog cover'
					/>
          </Link>

					<div className='p-4'>
						<h2 onClick={()=>router.push("/photos/55")}
            className='tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase '>
							Web development
						</h2>
						<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
							This is a blog template
						</h1>
						<div className='flex items-center flex-wrap '>
							<a href='/' className='text-green-800  md:mb-2 lg:mb-0'>
								<span className='inline-flex items-center'>
									Read Blog
									<svg
										className='w-4 h-4 ml-2'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth='2'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<path d='M5 12h14'></path>
										<path d='M12 5l7 7-7 7'></path>
									</svg>
								</span>
							</a>
							<span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
								<svg
									className='w-4 h-4 mr-1'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
								</svg>
								24
							</span>
							<span className='text-gray-400 inline-flex items-center leading-none text-sm'>
								<svg
									className='w-4 h-4 mr-1'
									stroke='currentColor'
									strokeWidth='2'
									fill='none'
									strokeLinecap='round'
									strokeLinejoin='round'
									viewBox='0 0 24 24'>
									<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
								</svg>
								89
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}