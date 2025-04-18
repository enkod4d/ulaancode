
import Link from 'next/link'

export default function Section9() {
	return (
		<>

			<div className="blog7-section-area sp2">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="blog-header text-center heading10 space-margin60">
								<h2 className="text-anime-style-3">Leadership in Strategies <br className="d-lg-block d-none" /> For
									Economic Growth</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
							<div className="blog1-auhtor-boxarea">
								<div className="img1 image-anime">
									<img src="/assets/img/all-images/blog/blog-img1.png" alt="" />
								</div>
								<div className="content-area">
									<ul>
										<li><Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 January 2025</Link>
										</li>
										<li className="m-0"><Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Mckayla</Link>
										</li>
									</ul>
									<div className="space20" />
									<Link href="/blog-single">The Future Global Economy Trends and Predictions</Link>
									<div className="space24" />
									<div className="btn-area1">
										<Link href="/blog-single" className="vl-btn7">Read More <span><i className="fa-solid fa-arrow-right" /></span></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
							<div className="blog1-auhtor-boxarea">
								<div className="img1 image-anime">
									<img src="/assets/img/all-images/blog/blog-img2.png" alt="" />
								</div>
								<div className="content-area">
									<ul>
										<li><Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 January 2025</Link>
										</li>
										<li className="m-0"><Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Earnest</Link>
										</li>
									</ul>
									<div className="space20" />
									<Link href="/blog-single">The Impact of Fintech on the Global Economy</Link>
									<div className="space24" />
									<div className="btn-area1">
										<Link href="/blog-single" className="vl-btn7">Read More <span><i className="fa-solid fa-arrow-right" /></span></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
							<div className="blog1-auhtor-boxarea">
								<div className="img1 image-anime">
									<img src="/assets/img/all-images/blog/blog-img3.png" alt="" />
								</div>
								<div className="content-area">
									<ul>
										<li><Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 January 2025</Link>
										</li>
										<li className="m-0"><Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Abdiel</Link></li>
									</ul>
									<div className="space20" />
									<Link href="/blog-single">The Rise of the Digital Economy Opportunities</Link>
									<div className="space24" />
									<div className="btn-area1">
										<Link href="/blog-single" className="vl-btn7">Read More <span><i className="fa-solid fa-arrow-right" /></span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
