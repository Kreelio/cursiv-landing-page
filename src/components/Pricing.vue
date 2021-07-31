<template>
    <section id="pricing" class="bg-gray-100 py-8">
      <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Tarification
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <br />
        <br />

        <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-300 text-gray-900">
          <tr class="text-left border-b border-gray-300">
            <th class="px-4 py-3">M</th>
            <th class="px-4 py-3">Prix(EUR)</th>
            <!-- <th class="px-4 py-3">1 year commitment price (USD)</th> -->
          </tr>
          <tr class="bg-gray-100 border-b border-gray-300">
            <td class="px-4 py-3">128Mo / enregistrement (~2h)</td>
            <td class="px-4 py-3">${{ db_storage_price_gbhr }}</td>
            <!-- <td class="px-4 py-3">${{ (db_storage_price_gbhr * (2/3)).toFixed(5) }}</td> -->
          </tr>    
        <!-- each row -->
          <!-- <tr class="bg-gray-100 border-b border-gray-300">
            <td class="px-4 py-3">Backup storage (GB-hr)</td>
            <td class="px-4 py-3">${{ backup_storage_price_gbhr }}</td>
            <td class="px-4 py-3">${{ (backup_storage_price_gbhr * (2/3)).toFixed(5) }}</td>
          </tr>     -->
        <!-- each row -->
          <!-- <tr class="bg-gray-100 border-b border-gray-300">
            <td class="px-4 py-3">Network egress (GB)</td>
            <td class="px-4 py-3">${{ network_price_gb  }}</td>
            <td class="px-4 py-3">${{ (network_price_gb * (2/3)).toFixed(5) }}</td>
          </tr>     -->
        <!-- each row -->
        </table>
      </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Pricing',
    data() {
      return {
        db_storage_price_gbhr: 0.00,
        backup_storage_price_gbhr: 0.001,
        network_price_gb: 0.5,
      }
    },
    methods: {
      db_storage_price_month(db_size_gb: number) { return  db_size_gb * 24 * 31 * this.db_storage_price_gbhr },
      backup_storage_price_month(bck_num: number, bck_size_gb: number) { return  bck_num * bck_size_gb * 24 * 31 * this.backup_storage_price_gbhr },
      network_price_month(read_ops: number, read_ops_size_bytes: number) { 
        return  (this.network_price_gb * (read_ops * read_ops_size_bytes / 1000000000)) 
      },
      total(db_size_gb: number, bck_num: number, bck_size_gb: number, read_ops: number, read_ops_size_bytes: number) { 
        return (
            this.db_storage_price_month(db_size_gb) + 
            this.backup_storage_price_month(bck_num, bck_size_gb) + 
            this.network_price_month(read_ops, read_ops_size_bytes)
          )
        }
    },
    setup() {
        
    },
})
</script>
