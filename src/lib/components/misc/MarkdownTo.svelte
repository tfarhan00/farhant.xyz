<script>
    import {remark} from 'remark'
    import remarkParse from 'remark-parse'
    import remarkGfm from 'remark-gfm'
    import remarkRehype from 'remark-rehype'
    import rehypeStringify from 'rehype-stringify'
    import rehypeSanitize from 'rehype-sanitize'
    import { onMount } from 'svelte';
    import sanitizeHtml from 'sanitize-html';

    /** @type {any}*/
    export let markdown;

    /** @type {any}*/
    let converted;

    onMount(() => {
        (async () => {
            converted = await remark()
            .use(remarkParse)
            .use(remarkGfm)
            .use(remarkRehype)
            .use(rehypeStringify)
            .use(rehypeSanitize)
            .process(markdown)
            console.log(String(converted))
        })()
    })
</script>

<div class="prose prose-stone prose-p:text-white">
    {@html sanitizeHtml(converted)}
</div>