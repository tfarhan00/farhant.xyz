<script>
    import {remark} from 'remark'
    import remarkParse from 'remark-parse'
    import remarkGfm from 'remark-gfm'
    import remarkRehype from 'remark-rehype'
    import rehypeStringify from 'rehype-stringify'
    import rehypeSanitize from 'rehype-sanitize'
    import { onMount } from 'svelte'

    /** @type {any}*/
    export let markdown;

    onMount(() => {
        (async () => {
            const file = await remark()
            .use(remarkParse)
            .use(remarkGfm)
            .use(remarkRehype)
            .use(rehypeStringify)
            .use(rehypeSanitize)
            .process(markdown)
            console.log(String(file))
        })()
    })
</script>

<div class="prose prose-stone prose-invert">
    {markdown}
</div>