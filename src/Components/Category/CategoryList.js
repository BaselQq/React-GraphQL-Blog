import { Box, Select, Text } from "@chakra-ui/react";
import React from "react";

function CategoryList({ data, recieveCategoryId }) {

    return (
        <Box>
            <Select w="240px" onChange={(e) => recieveCategoryId(e.target.value)} placeholder="Select Category">
            {data.categories.map((Category) => (
                <option value={Category.id}>{Category.title}</option>
            ))}
            </Select>
        </Box>
    );
};

export default CategoryList;