import { Box, Select, Text } from "@chakra-ui/react";
import React from "react";

function CategoryList({ data }) {

    return (
        <Box>
            <Select placeholder="Select Category">
            {data.categories.map((Category) => (
                <option value={Category.id}>{Category.title}</option>
            ))}
            </Select>
        </Box>
    );
};

export default CategoryList;