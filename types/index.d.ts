import { CreateElement } from 'vue';
import { Vue } from 'vue-property-decorator';
import DraggablePolicy from './broker/draggable-policy';
export default class DraggableVirtualList<T> extends Vue {
    value: Array<T>;
    Draggable: import("vue").VueConstructor<{
        options: any;
        list: any[];
        value: any[];
        noTransitionOnDrag?: boolean;
        clone: any;
        tag?: string;
        move: any;
        componentData: any;
    } & Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>> & Vue<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, never, never, any>>>;
    DraggablePolicy: typeof DraggablePolicy;
    render(h: CreateElement): import("vue").VNode;
}
