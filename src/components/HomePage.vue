<template>
    <div class="container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col-6">
                 <v-calendar is-expanded :attributes='attributes' >
                    <div
                        slot="day-popover"
                        slot-scope="{ day, dayTitle, attributes }">
                        <div class="text-xs text-gray-300 font-semibold text-center">
                        {{ dayTitle }}
                        </div>
                        <popover-row
                        v-for="attr in attributes"
                        :key="attr.key"
                        :attribute="attr">
                        {{ customData.description }}
                        </popover-row>
                    </div>
                </v-calendar>
            </div>
            <div class="col">
            </div>
        </div>   
    </div>
</template>

<script>
import PopoverRow from 'v-calendar/lib/components/popover-row.umd.min'

export default {
    name: 'HomePage',
    components: {
        PopoverRow,
    },
    data() {
    const todos = [
      {
        description: 'Take Noah to basketball practice.',
        isComplete: false,
        dates: { weekdays: 6 }, // Every Friday
        color: 'red',
      },
    ];
    return {
      incId: todos.length,
      todos,
    };
  },
  computed: {
    attributes() {
      return [
        // Attributes for todos
        ...this.todos.map(todo => ({
          dates: todo.dates,
          dot: {
            color: todo.color,
            class: todo.isComplete ? 'opacity-75' : '',
          },
          popover: {
            label: todo.description,
            visibility: 'click'
          },
          customData: todo,
        })),
      ];
    },
  },
}
</script>

<style>

</style>