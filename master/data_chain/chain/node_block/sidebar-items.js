initSidebarItems({"fn":[["create_link_descriptor","Returns a link descriptor with the hash of the group members, or `None` if `group` is empty."]],"struct":[["NodeBlock","If data block then this is sent by any group member when data is `Put`, `Post` or `Delete`. If this is a link then it is sent with a `churn` event. A `Link` is a nodeblock that each member must send each other in times of churn. These will not accumulate but be `ManagedNode`  to `ManagedNode` messages in the routing layer"],["Proof","Proof as provided by a close group member"]]});