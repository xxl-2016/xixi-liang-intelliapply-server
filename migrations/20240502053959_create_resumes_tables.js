/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("resumes", (table) => {
    table.increments("id").primary();
    table
      .string("username")
      .references("users.username")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable();
    table.string("phone").notNullable();
    table.string("location").notNullable();
    table.string("linkedin");
    table.string("github");
    table.string("portfolio");
    table.string("skills").notNullable();
    table.json("experience").notNullable();
    table.json("education").notNullable();
    table.json("certifications");
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
  return knex.schema.dropTable("resumes");
};
