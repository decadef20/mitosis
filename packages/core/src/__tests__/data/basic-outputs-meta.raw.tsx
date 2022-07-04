/** @jsxImportSource @builder.io/mitosis */
import { useStore, useMetadata, onMount } from '@builder.io/mitosis';

useMetadata({
  outputs: ['onMessage', 'onEvent'],
});
export default function MyBasicOutputsComponent(props: any) {
  const state = useStore({
    name: 'PatrickJS',
  });

  onMount(() => {
    props.onMessage(state.name);
    props.onEvent(props.message);
  });

  return <div></div>;
}
