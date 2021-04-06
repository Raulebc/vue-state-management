<template>
    <div>
        <div class="leading-loose">
            <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                <p class="text-gray-800 font-medium">Customer information</p>
                <div class="">
                <label class="block text-sm text-gray-00" for="full_name">Name</label>
                <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="full_name" name="full_name" type="text" required="" placeholder="Your Name" aria-label="Name">
                </div>
                <div class="mt-2">
                <label class="block text-sm text-gray-600" for="email">Email</label>
                <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="email" name="email" type="text" required="" placeholder="Your Email" aria-label="Email">
                </div>
                <div class="mt-2">
                <label class=" block text-sm text-gray-600" for="address">Address</label>
                <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="address" name="address" type="text" required="" placeholder="Street" aria-label="Email">
                </div>
                <div class="mt-2">
                <label class="hidden text-sm block text-gray-600" for="street">City</label>
                <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="street" name="street" type="text" required="" placeholder="City" aria-label="Email">
                </div>
                <div class="inline-block mt-2 w-1/2 pr-1">
                <label class="hidden block text-sm text-gray-600" for="country">Country</label>
                <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="country" name="country" type="text" required="" placeholder="Country" aria-label="Email">
                </div>
                <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label class="hidden block text-sm text-gray-600" for="zip">Zip</label>
                <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="zip"  name="zip" type="text" required="" placeholder="Zip" aria-label="Email">
                </div>
             </form>
        </div>
        <h1>Datos del cliente</h1>
        <input type="text" v-model="name"/>
    </div>
</template>

<script>
    import { state, mutations } from '../state';
     export default {
        name: 'One',
        // props: {
        //     name: String,
        //     phone: String,
        //     address: String
        // },
        computed: {
            name: {
                get: function () {
                    return state.name;
                },
                set: (value) => {
                    mutations.setName(value);
                }
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
