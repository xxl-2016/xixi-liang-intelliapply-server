/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("jobs", (table) => {
    table.increments("id").primary();
    table
      .string("username")
      .references("users.username")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("job_title").notNullable();
    table.string("company_name").notNullable();
    table.string("location").notNullable();
    table.integer("followup").notNullable();
    table.string("post_date").notNullable();
    table.boolean("applied").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("jobs");
};
