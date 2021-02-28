<script context="module">
	import ApolloClient, { gql } from 'apollo-boost';  
	import moment from 'moment'

	const blogQuery = gql`
	query Blogs {  
		blogs {
			id
			Title
			Description
			Published
			Body
			author {
				username
			}
			Slug
			Cover {
			url
			}
		}
	}
	`;

	export async function preload({params, query}) {
		const client = new ApolloClient({ 
			uri: 'http://localhost:1337/graphql',
			fetch: this.fetch
			 });
		const results = await client.query({
			query: blogQuery
		})

		return {posts: results.data.blogs}
	}

</script>

<script>
	export let posts;
</script>

<style>
	ul, p {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	.main-title {
		font-size: 25px;
	}
</style>

<svelte:head>
	<title>Testomonials</title>
</svelte:head>


	<div id="page-header">
			<div id="header-account" class="level-2bf">

			</div>
		</div>



		<div id="page-content">
			<div class="placeholder" id="level-3-hero">

	<div id="hero-billboard-level-3" class="testimonialsbg"
					style="background-image:url(https://www.follettbookfairs.com/images/rewardsbg2.jpg)!important">
					<div class="wrapper">
						<div class="container">
							<div class="row">
								<div class="span8" id="billboard-placeholder">
									<!-- <div class="section">
										 <h2 class="thin-header" style="color:#00529c;">Easy to Set Up,<br> Easy to Run</h2>
										 <p class="lead thin-subheader" style="font-weight:bolder;">More choices, more rewards, more fun – that’s what you get from a Follett Book Fair.</p>								
									
									</div> -->
								</div>
							</div>
						</div>
					</div>




				</div>





			</div>

			<section id="hero-headline">
				<div class="wrapper">
					<div class="container">
						<div class="row">

							<div class="span8">
								<div class="section">

									<h2 class="thin-header light">What everyone's saying.
									</h2>
									<p class="thin-subheader light ">Real experiences with Follett
										Book Fairs.

									</p><br>

									<div>
										<a data-isolde-link="all" class="btn btn-blue-white nav__link newcursor">Show
											All</a>
										<a data-isolde-link="testimonial"
											class="btn btn-orange nav__link newcursor">Testimonials</a>
										<!-- <a href="#videos" class="btn btn-orange">Interviews</a> -->
										<a data-isolde-link="article" class="btn btn-orange newcursor">Articles</a>

									</div>
									<br>

								</div>
							</div>








						</div>
					</div>
				</div>

			</section>

			<div id="content-primary">


			</div>
		</div>


		<section class="white-band">
			<div>

				<div class="row pull1">



					<!-- masonry grid-->
					<div>

						<main class="sortable">
							<div>
								<div class="wrapper">

									<div id="isolde" class="isolde-default">


{#each posts as post}
   <div class="cardparent" data-isolde-el="article">
											<div class="card ">
												<img class="card__picture" src="{post.Cover}"
													alt="">
												<div class="card-infos">
													<h2 class="card__title">{post.Title}{post.Cover}</h2>
													<p class="card__text">
														<strong>{moment().to(post.Published, "DD-MM-YYYY")} ago by </strong>
														 <br>
														{post.author.username}<br>
													</p>

													<a class="btn btn-orange nav-btn readMore"
														rel='prefetch' href='articles/{post.Slug}'>Read about {post.Title}</a>
												
												</div>
											</div>
										</div>

	{/each}




										
									</div>
								</div>
							</div>
						</main>

					</div>

					<!--Masonry Grid-->




				</div>











			</div>




		</section>











		<section id="more-band">
			<div class="wrapper">
				<div class="container">
					<div class="row">

						<div class="span8">
							<div class="section">
								<br>
								<h2 class="thin-header light">More Ways to Fundraise
								</h2>

								<h5 class="thin-subheader light">There’s so much more than a physical fair.</h5>

								<br>


							</div>
						</div>






						<div class="span5 bottom-margin-double">
							<div>

								<h5 class="thin-whisper light">Follett Book eFairs for Your School
								</h5>
								<p><span class="light">The ideal fit for small schools or those outside our service
										area, our online
										schoolwide offering is a great way to get the book fair experience.
									</span></p>


								<p> <span style="color:white;margin-left:10px;"></span><br><span><a
											class="btn btn-orange" href="/schoolefairs/">Learn More
										</a></span></p>

							</div>
						</div>




						<div class="span5 bottom-margin-double">


							<div>

								<h5 class="thin-whisper light">Follett Book Fair Companion</h5>

								<p><span class="light">We’ll be adding a digital component to your fair to maximize your
										revenue. It’s
										the perfect complement for those who cannot attend your on-site fair.

										<br><br><br>

										<strong>Coming soon</strong>

									</span></p>





							</div>


						</div>

					</div>
				</div>
			</div>

		</section>

		<section class="social-band">
			<h2 class="section-header">Follow us on social media!</h2>

			<div class="wrapper">
				<div class="container text-center">
					<div class="row">


						<div class="span10">
							<a href="https://www.facebook.com/follettlearning" target="_blank"><img
									src="/images/loader.gif" data-src="/images/icon-facebook-white.png" alt="Facebook"
									title="Facebook" class="lazy social-icon"></a>
							<a href="https://www.twitter.com/follettlearning" target="_blank"><img
									src="/images/loader.gif" data-src="/images/icon-twitter-white.png" alt="Twitter"
									title="Twitter" class="lazy social-icon"></a>
							<a href="https://www.instagram.com/follettlearning" target="_blank"><img
									src="/images/loader.gif" data-src="/images/icon-instagram-white.png" alt="Instagram"
									title="Instagram" class="lazy social-icon"></a>
							<a href="https://www.pinterest.com/follettlearning" target="_blank"><img
									src="/images/loader.gif" data-src="/images/icon-pinterest-white.png" alt="Pinterest"
									title="Pinterest" class="lazy social-icon"></a>
						</div>


					</div>
				</div>

			</div>

		</section>
		<div id="page-footer">
			<div id="footer-primary">
				<div class="wrapper">
					<div class="container">
						<p class="quiet text-center">Copyright &copy; 2020
							<a class="no-wrap" href="http://www.follett.com/">Follett Corporation</a>.
							<span class="no-wrap">All rights reserved.</span>
							&nbsp;&nbsp;|&nbsp;&nbsp;
							<a class="no-wrap" href="https://www.follett.com/policies/">Privacy Policy</a>
							&nbsp;&nbsp;|&nbsp;&nbsp;
							<a class="no-wrap" href="https://www.follett.com/policies/">Terms of Use</a>
							&nbsp;&nbsp;|&nbsp;&nbsp;
							<span class="no-wrap">Email:</span> <a
								href="mailto:bfsupport@follett.com">bfsupport@follett.com</a>
							&nbsp;&nbsp;|&nbsp;&nbsp;
							<a href="tel:1-877-857-7259">877.857.7259</a>
						</p>
					</div>
				</div>
			</div>
		</div>
