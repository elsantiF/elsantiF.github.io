<script lang="ts">
import { ALL_FAQS } from "$lib/data/faqs";
</script>

<article>
	<h1 class="title">F.A.Q</h1>
	{#each ALL_FAQS as faq (faq.question)}
    <dl>
			<dt class="question">{faq.question}</dt>
			<dd class="answer">{faq.answer}</dd>
    </dl>
	{/each}
</article>

<style lang="scss">
	@use '$lib/styles/articles';

	article {
		dl {
				font-size: 1em;
				margin-bottom: 0;

			.question {
				margin-top: 0.5em;
        font-weight: 600;
			}

			.answer {
				margin: 0 0.5em ;
				font-weight: 400;

				&::before {
					content: ' - ';
				}
			}
		}
	}
</style>
