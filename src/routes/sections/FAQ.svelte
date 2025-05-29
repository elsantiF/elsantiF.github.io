<script>
	const faqs = [
		{
			question: 'Are you looking for a job',
			answer: 'Yes'
		},
		{
			question: 'What is your level of English',
			answer: 'Between B2 and C1'
		},
		{
			question: 'Any hobbies',
			answer: 'Music, videogames, electronics and rockets'
		},
		{
			question: 'Are you studying',
			answer: "Yes but I'm in a pause because administrative and personal things"
		},
		{
			question: 'Do you want to participate in a X project',
			answer: 'Probably yes'
		},
		{
			question: 'What OS you use',
			answer: 'Windows 11 and EndeavourOS'
		}
	];
</script>

<article>
	<h1 class="title">F.A.Q</h1>
	<h3 class="text">
		{#each faqs as faq (faq.question)}
			<div>
				<h3 class="question">{faq.question}</h3>
				<h3 class="answer">{faq.answer}</h3>
			</div>
		{/each}
	</h3>
</article>

<style lang="scss">
	@use '$styles/articles';

	article {
		h3.text {
			div {
				h3 {
					font-size: 1em;
					margin-bottom: 0;
				}

				.question {
					margin-top: 0.5em;

					&::after {
						content: '?';
					}
				}

				.answer {
					margin: 0 1.5em;
					font-weight: 400;
					font-size: 0.8em;

					&::before {
						content: ' - ';
					}
				}
			}
		}
	}
</style>
